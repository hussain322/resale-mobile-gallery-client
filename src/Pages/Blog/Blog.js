import React from "react";
import useTitle from "../../Hooks/useTitle";
import "./Blog.css";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className=" blog-container">
      <div className="w-[90%] mx-auto pt-20">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-purple-200 rounded-box my-4"
        >
          <div className="collapse-title text-2xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <div>
              <b>The Four Kinds of React State to Manage</b>
              <div>
                When we talk about state in our applications, it’s important to
                be clear about what types of state actually matter. <br />
                There are four main types of state you need to properly manage
                in your React apps:
              </div>
              <li>Local State</li>
              <li>Global State</li>
              <li>Server State</li>
              <li>URL State</li>
              <p>Let's cover each of these in detail:</p>
              <p>
                <strong>Local (UI) state –</strong> Local state is data we
                manage in one or another component. Local state is most often
                managed in React using the useState hook. For example, local
                state would be needed to show or hide a modal component or to
                track values for a form component, such as form submission, when
                the form is disabled and the values of a form’s inputs.
              </p>
              <p>
                <strong>Global (UI) state – </strong> Global state is data we
                manage across multiple components. Global state is necessary
                when we want to get and update data anywhere in our app, or in
                multiple components at least. A common example of global state
                is authenticated user state. If a user is logged into our app,
                it is necessary to get and change their data throughout our
                application. Sometimes state we think should be local might
                become global.
              </p>
              <p>
                <strong>Server state –</strong> Data that comes from an external
                server that must be integrated with our UI state. Server state
                is a simple concept, but can be hard to manage alongside all of
                our local and global UI state. There are several pieces of state
                that must be managed every time you fetch or update data from an
                external server, including loading and error state. Fortunately
                there are tools such as SWR and React Query that make managing
                server state much easier.
              </p>
              <p>
                <strong>URL state –</strong> Data that exists on our URLs,
                including the pathname and query parameters. URL state is often
                missing as a category of state, but it is an important one. In
                many cases, a lot of major parts of our application rely upon
                accessing URL state. Try to imagine building a blog without
                being able to fetch a post based off of its slug or id that is
                located in the URL! There are undoubtedly more pieces of state
                that we could identify, but these are the major categories worth
                focusing on for most applications you build.
              </p>
            </div>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-purple-200 rounded-box my-4"
        >
          <div className="collapse-title text-2xl font-medium">
            How does prototypical inheritance work?
          </div>
          <div className="collapse-content">
            <div>
              <p>
                Prototypical inheritance allows us to reuse the properties or
                methods from one JavaScript object to another through a
                reference pointer function. All JavaScript objects inherit
                properties and methods from a prototype: Date objects inherit
                from Date.
              </p>
            </div>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-purple-200 rounded-box my-4"
        >
          <div className="collapse-title text-2xl font-medium">
            What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content">
            <p>
              <strong>Unit Test:</strong> Unit Testing is a type of software
              testing where individual units or components of a software are
              tested. The purpose is to validate that each unit of the software
              code performs as expected. Unit Testing is done during the
              development (coding phase) of an application by the developers.
              Unit Tests isolate a section of code and verify its correctness. A
              unit may be an individual function, method, procedure, module, or
              object.
            </p>
            <p>
              <strong>Why should we write unit test:</strong> <br />
              They enable you to catch bugs early in the development process.
              Automated unit tests help a great deal with regression testing.
              They detect code smells in your codebase. For example, if you're
              having a hard time writing unit tests for a piece of code, it
              might be a sign that your function is too complex
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-purple-200 rounded-box my-4"
        >
          <div className="collapse-title text-2xl font-medium">
            React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content">
            <div>
              <strong>React: </strong>
              <p>
                React offers a Getting Started guide that should help one set up
                React in about an hour. The documentation is thorough and
                complete, with solutions to common issues already present on
                Stack Overflow. React is not a complete framework and advanced
                features require the use of third-party libraries. This makes
                the learning curve of the core framework not so steep but
                depends on the path you take with additional functionality.
                However, learning to use React does not necessarily mean that
                you are using the best practices.
              </p>
            </div>
            <p>
              <strong>Angular: </strong>
              Angular has a steep learning curve, considering it is a complete
              solution, and mastering Angular requires you to learn associated
              concepts like TypeScript and MVC. Even though it takes time to
              learn Angular, the investment pays dividends in terms of
              understanding how the front end works.
            </p>
            <div>
              <strong>Vue: </strong>
              <p>
                Vue provides higher customizability and hence is easier to learn
                than Angular or React. Further, Vue has an overlap with Angular
                and React with respect to their functionality like the use of
                components. Hence, the transition to Vue from either of the two
                is an easy option. However, simplicity and flexibility of Vue is
                a double-edged sword — it allows poor code, making it difficult
                to debug and test.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
