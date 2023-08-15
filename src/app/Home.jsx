import React from "react";
import ContactForm from "./contactForm"; // Use lowercase "contactForm"

function Home() {
  // ... your component code

  return (
    <div>
      {/* ...header section */}
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* ...existing content */}
        </section>
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ContactForm /> {/* Use the ContactForm component without useClient */}
        </section>
      </main>
    </div>
  );
}

export default Home;
