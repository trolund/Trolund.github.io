import PostPreview from './post-preview'
import ProjectItem from './ProjectItem/ProjectItem'

export default function ProjectsView({ posts }) {
  return (
    <section>
      {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Projects
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <ProjectItem
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            technologies={post.technologies} content={''} />
        ))}
      </div>
    </section>
  )
}
