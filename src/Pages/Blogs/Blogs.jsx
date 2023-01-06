import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl bg-success font-bold">
        <div>
          <p>
            Question number 01: What are the different ways to manage a state in
            a React application?
          </p>
          <hr />
        </div>
        <div>
          <h4>Answer:</h4>
          <p>
            {" "}
            1:Every React component has a built-in state. This state is an
            object which stores the property values that belong to a component.
            State is able to keep data from different components in-sync because
            each state update re-renders all relevant components.
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl bg-success font-bold">
        <div>
          <p>Question number 02: How does prototypical inheritance work?</p>
          <hr />
        </div>
        <div>
          <h4>Answer:</h4>
          <p>
            2:The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the Prototype of an object,
            we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in
            modern language, it is being set
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl  bg-success font-bold">
        <div>
          <p>
            Question number 03: What is a unit test? Why should we write unit
            tests?
          </p>
          <hr />
        </div>
        <div>
          <h4>Answer:</h4>
          <p>
            3: called units, are individually and independently scrutinized for
            proper operation. This testing methodology is done during the
            development process by the software developers and sometimes QA
            staff. The main objective of unit testing is to isolate written code
            to test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl bg-success font-bold">
        <div>
          ss
          <p>Question number 04:React vs. Angular vs. Vue?</p>
          <hr />
        </div>
        <div>
          <h4>Answer:</h4>
          <p>
            4:Web developers are always at crossroads where they have to decide
            among a range of development frameworks and choose one for their
            project. It is a common topic of debate among developers on how to
            pick a framework for their next big project. Some frameworks which
            have become the most popular among developers and causing the
            dilemma are ReactJS, VueJS, and Angular.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
