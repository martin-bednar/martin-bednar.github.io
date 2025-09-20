import type {Route} from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Martin Bednář - Software Engineer"},
        {
            name: "description",
            content: "I'm a full-stack software engineer focused on building custom software and web applications that solve real-world problems. My favorite work lies in translating complex business needs into effective technical solutions."
        },
    ];
}

export default function Home() {
    return (
        <div className="my-4 p-2 font-light text-gray-800 max-w-3xl mx-auto lg:max-w-[unset] lg:mx-12 lg:mt-16 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-16 text-sm/6">
            <header className="mt-8 mb-4 lg:mt-0 lg:mb-0 lg:sticky lg:top-4 lg:self-start">
                <h1 className="text-4xl font-medium my-2">Martin Bednář</h1>
                <p className="text-lg font-normal mb-4">Software Engineer</p>
                <p>I turn business ideas into custom software solutions.</p>
            </header>
            <main className="">
                <p className="my-4 text-justify">I&#39;m a full-stack software engineer focused on building custom software and web applications that
                    solve
                    real-world problems. My favorite work lies in translating complex business needs into effective
                    technical
                    solutions.</p>
                <div className="my-4">
                    <p>As an independent software engineer, I&#39;m contributing to several
                        projects:</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><a href="https://sportera.cz/" className="text-blue-600 hover:underline">Sportera</a>, a platform that maps public sports facilities,
                        </li>
                        <li><a href="https://decathlon.cz/" className="text-blue-600 hover:underline">decathlon.cz</a>, an e-commerce platform for sports
                            equipment,
                        </li>
                        <li>and an internal platform dedicated to business process optimization at <a
                            href="https://www.decathlon.cz/SDblog_lp-7UOV4P" className="text-blue-600 hover:underline">Decathlon CZ - Sustainability</a>.
                        </li>
                    </ul>
                </div>
                <h2 id="achievements" className="text-3xl font-medium mb-4 mt-8">Achievements</h2>
                <h3 id="2025" className="text-xl font-medium my-2">2025</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>Saved 900 hours annually by building an internal platform for managing B-stock products.</li>
                    <li>Modernized a legacy corporate platform and extended its functionality with new modules for
                        checkout,
                        financial operations and inventory management.
                    </li>
                    <li>Created a corporate intranet tool to view the structure of the company and its employees,
                        improving
                        internal communication.
                    </li>
                    <li>Contributed to a large-scale extension of the checkout funnel on a major e-commerce website,
                        enabling
                        users without accounts to make purchases.
                    </li>
                </ul>
                <h3 id="2024" className="text-xl font-medium my-2 ">2024</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>Built a backend service for invoice creation and order processing, allowing the product to meet
                        compliance requirements and enabling its launch in the Czech Republic.
                    </li>
                    <li>Became the tech founder of Outspace, a startup focused on creating a sport events platform.</li>
                    <li>Created a user-facing tool for managing e-commerce funnels, enabling marketing teams to
                        independently
                        create complex customer journeys.
                    </li>
                </ul>
                <h3 id="2023" className="text-xl font-medium my-2">2023</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>Created an interactive web application as part of a digital art exhibition in cooperation with
                        students of the Academy of Fine Arts in Prague.
                    </li>
                    <li>Developed a text-processing middleware to for generating the <a
                        href="https://en.wikipedia.org/wiki/Vocative_case" className="text-blue-600 hover:underline">vocative case</a> of Czech names. The
                        middleware is
                        used to handle milions of emails weekly.
                    </li>
                </ul>
                <h3 id="2022" className="text-xl font-medium my-2">2022</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>Built Haskell Admin, a Remote Management platform for Haskell applications.</li>
                </ul>
                <h2 id="education" className="text-3xl font-medium mb-4 mt-8">Education</h2>
                <ul className="space-y-4">
                    <li><strong className="font-medium">Bachelor&#39;s Degree in Software Engineering</strong><br/>Czech Technical University in
                        Prague, Faculty of Information Technology (2019 - 2022)
                    </li>
                    <li><strong className="font-medium">Erasmus Exchange Program</strong><br/>École Centrale de Nantes, Control and Robotics
                        department (2023 - 2024)
                    </li>
                    <li><strong className="font-medium">Master&#39;s Degree in Software Engineering</strong><br/> Czech Technical University in
                        Prague, Faculty of Information Technology (expected to graduate in 2026)
                    </li>
                </ul>
                <h2 id="publications" className="text-3xl font-medium mb-4 mt-8">Publications</h2>
                <ul className="">
                    <li><strong className="font-medium">Remote Function Calls for Haskell Applications (2022).</strong> Bachelor&#39;s Thesis, Czech Technical
                        University in Prague. <a href="https://dspace.cvut.cz/handle/10467/102069" className="text-blue-600 hover:underline">Published online</a></li>
                </ul>
                <h2 id="technical-skills" className="text-3xl font-medium mb-4 mt-8">Technical Skills</h2>
                <ul className="space-y-2">
                    <li><strong>Analysis:</strong> Requirements gathering, System design, UML, BPMN</li>
                    <li><strong>Design:</strong> UI/UX design, Software architecture, REST API, OpenAPI/Swagger</li>
                    <li><strong>Frontend:</strong> JavaScript, TypeScript, React, Vue, Svelte, HTML, CSS</li>
                    <li><strong>Backend:</strong> Node.js, Express, Nest.js, PHP, Python, Haskell</li>
                    <li><strong>Databases:</strong> PostgreSQL, MySQL, SQLite, Firebase, Supabase</li>
                    <li><strong>DevOps:</strong> Docker, Git, CI/CD, Google Cloud Platform, Netlify</li>
                    <li><strong>Testing:</strong> Storybook, Jest, Playwright</li>
                </ul>
            </main>
        </div>
    );
}
