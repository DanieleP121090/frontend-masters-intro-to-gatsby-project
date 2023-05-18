module.exports = {
    siteMetadata: {
        siteUrl: 'https://youdomain.tld',
        title: 'My page title test',
        description: "Frontend master description meta",
        image: "https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg"
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/src/posts`
            }
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: `${__dirname}/src/posts`
            }
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                defaultLayouts: {
                    posts: require.resolve('./src/components/post-layout.js')
                }
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            }
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'vnkupgyb',
                dataset: 'production'
            }
        }
    ]
};