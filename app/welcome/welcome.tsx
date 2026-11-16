import FeaturedProjects from "~/featured-projects"

export function Welcome() {
  return (
    <div>
      <div className="flex-row bg-background">
        <section className="flex-row text-center py-6 gap-6 mx-6 max-w-6xl xl:mx-auto">
          <h1 className="text-2xl font-medium font-heading text-black mb-3">Hey there! 😺</h1>
          <h2 className="text-lg max-w-xl mx-auto leading-tight mb-3 text-secondary-foreground">I'm a product-minded, front-end-leaning software engineer with a keen eye for design and a passion for problem-solving.</h2>
          <p className="text-base max-w-xl mx-auto leading-tight mb-3 text-secondary-foreground font-medium">Take a peek at some of my recent projects 👇</p>
        </section>
      </div>
      <FeaturedProjects></FeaturedProjects>
    </div>
  );
}
