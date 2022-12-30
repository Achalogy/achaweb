import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import getBlog from "../../src/api/blog/getBlog"
import getBlogInfo from "../../src/api/blog/getBlogInfo"
import BlogLayout from "../../src/layouts/blog.layout";

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import rangeParser from 'parse-numeric-range'
import nord from "react-syntax-highlighter/dist/cjs/styles/prism/nord";

SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('markdown', markdown)
SyntaxHighlighter.registerLanguage('json', json)

export default function BlogPost({ blog, info }: any) {

  const MarkdownComponents: object = {
    code({ node, inline, className, ...props }: any) {

      props.children = props.children.map((x: any) => x ? x.trim(): x)
      
      const match = /language-(\w+)/.exec(className || '')
      const hasMeta = node?.data?.meta

      const applyHighlights: object = (applyHighlights: number) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/
          const metadata = node.data.meta?.replace(/\s/g, '')
          const strlineNumbers: any = RE?.test(metadata)
            ? RE.exec(metadata) : '0'
          const highlightLines = rangeParser(strlineNumbers ?? '0')
          const highlight = highlightLines
          const data: string = highlight.includes(applyHighlights)
            ? 'highlight'
            : ''
          return { data }
        } else {
          return {}
        }
      }

      return match ? (
        <SyntaxHighlighter
          style={nord}
          language={match[1]}
          PreTag="div"
          className="codeStyle"
          showLineNumbers={true}
          wrapLines={hasMeta ? true : false}
          useInlineStyles={true}
          lineProps={applyHighlights  }
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      )
    },
  }
  const options: any = { year: 'numeric', month: 'long', day: 'numeric' };  

  return(
    <BlogLayout>
      <div className="flex flex-col items-center">
        <div className="lg:border-b border-zinc-500 flex flex-col text-xs lg:items-center mb-4 w-full px-4 lg:px-0 lg:w-7/12">
          <h1 className="mt-4 text-4xl font-semibold dark:text-white">{info.title}</h1>
          <p className="dark:text-zinc-400 mb-3">{new Date(info.date).toLocaleDateString(undefined, options)}</p>
        </div>
        <div className="flex flex-col react-markdown w-full px-6 lg:px-0 lg:w-6/12">
          <ReactMarkdown children={blog} remarkPlugins={[remarkGfm]} components={MarkdownComponents} />
        </div>
      </div>
    </BlogLayout>
  )
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const blog = await (await getBlog(id)).split("\n").slice(3).join("\n")
  const info = await getBlogInfo(id)

  return {
    props: {blog, info}
  }
}