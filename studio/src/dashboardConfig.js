export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fbd7d6d00a0db4648ebcf62',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-saf95f3c',
                  apiId: 'fd14d016-af2d-4b4a-8171-fbb36c6c634d'
                },
                {
                  buildHookId: '5fbd7d6dcaa30a4c8e772cf6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-axat2b1i',
                  apiId: '2646b9b2-3bd6-44ac-ac9e-dd4f15ff39a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/puneetx/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-axat2b1i.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
