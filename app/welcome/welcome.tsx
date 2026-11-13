import ProjectList from "~/project-list"
import Header from "~/header";
import Footer from "~/footer"

export function Welcome() {
  return (
    <div>
      <div className="flex-row bg-background">
        <section className="flex-row text-center py-6 gap-6 mx-6 max-w-6xl xl:mx-auto">
          <h2 className="text-2xl font-medium font-heading text-black mb-3">Hey there! 😺</h2>
          <h3 className="text-lg max-w-xl mx-auto leading-tight mb-3 text-secondary-foreground">I'm a product-minded, front-end-leaning software engineer with a keen eye for design and a passion for problem-solving.</h3>
          <p className="text-base max-w-xl mx-auto leading-tight mb-3 text-secondary-foreground font-medium">Take a peek at some of my recent projects 👇</p>
        </section>
      </div>
      <ProjectList></ProjectList>
    </div>
  );
}
