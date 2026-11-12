import ProjectList from "~/project_list"
import Header from "~/header";

export function Welcome() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header></Header>
      <main className="flex-row bg-background pb-8 flex-1">
        <section className="flex-row text-center pt-6 gap-6 mx-6 max-w-6xl xl:mx-auto">
          <h2 className="text-2xl font-medium font-heading text-black mb-3">Hey there! 😺</h2>
          <h3 className="text-lg max-w-xl mx-auto leading-tight mb-3 text-secondary-foreground">I'm a product-minded, front-end-leaning software engineer with a keen eye for design and a passion for problem-solving.</h3>
          <p className="text-base max-w-xl mx-auto leading-tight mb-3 text-secondary-foreground font-medium">Take a peek at some of my recent projects 👇</p>
        </section>
        <ProjectList></ProjectList>
      </main>
      <footer className="bg-accent-foreground p-3 text-center shrink-0">
        <p className="text-xs text-accent">&copy; {new Date().getFullYear()} Amber Suratte</p>
      </footer>
    </div>
  );
}
