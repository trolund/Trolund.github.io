import React from 'react'
import ReactMarkdown from "react-markdown"
import * as Markdown from "react-markdown"
import Image from "next/image"
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeMeta from 'rehype-meta'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

interface ExperienceProp {
    mdcontent?: any
}

const renderers: Markdown.Components = {
    li: ({node, children}) => {
      const element: HTMLLIElement = node as any;
      const imageUrl = (element as any).properties["dataUrl"]
      const height = (element as any).properties["dataH"]
      const width = (element as any).properties["dataW"]
      const radius = (element as any).properties["dataR"]

      if(imageUrl){
        return (
          <li>
            <div className="flex flex-row">
              <div className='mt-4 mr-6'>
                <Image 
                  src={imageUrl ?? ""} 
                  width={width}
                  height={height} 
                  alt="logo" 
                  style={{ borderRadius: radius }}
                />
              </div>
              <div style={{width: "100%"}}>{children}</div>
            </div>
          </li>
        )
      }else {
        return <li>{children}</li>
      }
    },
    image: ({node}) => {
      const i: HTMLImageElement = node as any;
      return <Image src={i.src ?? ""} alt={i.alt ?? ""} height={i.height ?? 50} width={i.width ?? 50} />
    }
  }

const Experience: React.FC<ExperienceProp> = ({ mdcontent }: ExperienceProp) => {
    return (<ReactMarkdown 
                components={renderers}
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex, rehypeMeta, rehypeRaw]}
            >
                {mdcontent}
            </ReactMarkdown>)
}

export default Experience