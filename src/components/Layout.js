import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import '../styles/global.css'
import {
  container,
  footer,
  banner,
  headercontainer,
  left,
  right,
  siteTitle,
  githubHead,
  linkedin,
  middleContainer,
  margin
} from '../styles/layout.module.css'
import '../styles/middlestyle.css'
import Navbar from './Nav'

export default function Layout({pageTitle, children }) {
  const data = useStaticQuery(graphql`
  query SiteInfo {
    site {
      siteMetadata {
        title
        myName
      }
    }
  }`)
  return (
    <main className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <div className={banner}>
          <header className={headercontainer}>
              <div className={left}>
                <a className={siteTitle} href='/'>{data.site.siteMetadata.myName}</a>
                {/*GitHub-Mark-Light-120px-plus.png*/}
                <a href='https://github.com/akrakman/' target='_blank' rel='noreferrer'>
                  <StaticImage className={`${githubHead} zoom`} src="../images/GitHub-64px.png" alt="GitHub"/>
                </a>
                {/*LI-In-Bug.png*/}
                <a href='https://www.linkedin.com/in/krakman/' target='_blank' rel='noreferrer'>
                  <StaticImage className={`${linkedin} zoom`} src="../images/LI-In-Bug-Light.png" alt="Linkedin"/>
                </a>
              </div>
              <div className={right}>
                <Navbar />
              </div>
          </header>
      </div>
      <div className={`${middleContainer} middlestyle`}>
          {children}
      </div>
      <footer className={footer}>
        <p className={margin}>
          {data.site.siteMetadata.title}
          <br />
          <span style={{fontSize: 12}}>
            © {new Date().getFullYear()} {data.site.siteMetadata.myName}. Built with Gatsby
          </span>
        </p>
      </footer>
    </main>
  )
}
