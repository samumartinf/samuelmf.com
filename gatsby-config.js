module.exports = {
    siteMetadata: {
        title: "Samuel Martin Frias",
        description: `Site for a London based nutcase`,
        author: {
            name: `Samumartinf`,
        },
        siteUrl: `https://samuelmf.com`, // Do not put trailing slash
        image: `https://samuelmf.com/weblogo.png`,
    },
    plugins: [
        `gatsby-plugin-create-page-html`,
        `gatsby-plugin-image`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-slug`,
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
              siteUrl: `https://samuelmf.com`,
              stripQueryString: true,
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: ['.mdx', '.md'],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            linkImagesToOriginal: false,
                            maxWidth: 900,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-smartypants`,
                        options: {
                            ellipses: false,
                            quotes: false,
                        }
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                ],
            },
        },
        // This is part of the intro test
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            }
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    placeholder: `none`,
                    quality: 100
                }
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `sitemap`,
                excludes: ['/wp-admin', '/**/*.html']
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/posts`,
                name: `posts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/src/img`,
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                    {
                        site {
                            siteMetadata {
                                title
                                description
                                siteUrl
                                site_url: siteUrl
                            }
                        }
                    }
                `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMdx } }) => {
                            return allMdx.edges.map(edge => {
                                return Object.assign({}, edge.node.frontmatter, {
                                    description: edge.node.frontmatter.description || edge.node.excerpt,
                                    date: edge.node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    custom_elements: [{ "content:encoded": edge.node.html }],
                                })
                            })
                        },
                    query: `
                        {
                            allMdx(
                                sort: { order: DESC, fields: [frontmatter___date] },
                            ) {
                                edges {
                                    node {
                                        excerpt
                                        html
                                        body
                                        fields {
                                            slug
                                        }
                                        frontmatter {
                                            title
                                            date
                                            description
                                            image
                                        }
                                    }
                                }
                            }
                        }
                    `,
                        output: "/rss.xml",
                        title: "Samuelmf.com Posts",
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-netlify',
            options: {
                headers: {
                    '/fonts/*': [
                        'Cache-Control: public',
                        'Cache-Control: max-age=365000000',
                        'Cache-Control: immutable',
                    ],
                },
            },
        },
        {
            resolve: `gatsby-plugin-use-dark-mode`,
            options: {
                classNameDark: `dark-mode`,
                classNameLight: `light-mode`,
                minify: true,
            }
        },
    ],
}
