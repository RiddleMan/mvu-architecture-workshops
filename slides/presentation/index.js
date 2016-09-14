// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Link,
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Slide,
  Spectacle,
  Table,
  TableRow,
  TableItem,
  BlockQuote,
  Cite,
  Quote
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  cover: require("../assets/images/cover.jpg"),
  hammer: require("../assets/images/hammer.jpg"),
  screwdriver: require("../assets/images/screwdriver.jpg"),
  mapFilterReduce: require("../assets/images/map-filter-reduce-emoji.png"),
  pipes: require("../assets/images/pipes-analogy.jpg"),
  reduxFlow: require("../assets/images/redux.jpg"),
  randomImpl: require("../assets/images/random_impl.png"),
  soPure: require("../assets/images/so_pure.jpg"),
  fbPost: require("../assets/images/fb-post.png"),
  fbPre: require("../assets/images/fb-pre.png")
};

preloader(images);

const theme = createTheme({
  primary: "#52b2e4"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="number">
          <Slide bgImage={images.cover}>
            <Heading size={1} fit caps>
              MVU Architecture
            </Heading>
            <Heading size={4} caps textAlign="left" textColor="white">
              workshops
            </Heading>
            <Heading size={4} caps textAlign="left" textColor="white">
              Artur Ptaszek
            </Heading>
            <Heading size={6} caps textAlign="left" textColor="white">
              @Synergy Codes
            </Heading>
            <Heading size={6} textAlign="left" textColor="white">
              17.09.2016r.
            </Heading>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>Your own opinion</li>
                <li>Obvious</li>
                <li>Workshops</li>
              </ul>
            `}
          >
            <Heading size={1} fit caps>
              Rules
            </Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} caps>
              What's the goal?
            </Heading>
            <List>
              <Appear><ListItem>Learn how to split code</ListItem></Appear>
              <Appear><ListItem>Learn why structure of code is so important</ListItem></Appear>
              <Appear><ListItem>Learn basics of functional programming</ListItem></Appear>
              <Appear><ListItem>Learn pretty and shinny architecture: Flux 🌟</ListItem></Appear>
            </List>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>Easy app</li>
                <li>Allows to focus on imporant things</li>
              </ul>
            `}
          >
            <Heading size={1} caps>
              What's the goal?
            </Heading>
            <Link target="_blank" href="http://todomvc.com">
              <Heading size={3} caps textColor="white" padding="30px 0">
                TODO MVC
              </Heading>
            </Link>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>Easy app</li>
                <li>Allows to focus on imporant things</li>
              </ul>
            `}
          >
            <Heading size={1} caps fill>
              What makes architecture good?
            </Heading>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>Nails example</li>
                <li>When we have only one nail to hit it's ok</li>
                <li>But when we have more... it's getting complicated</li>
                <li>Pareto rule - layer architecture</li>
                <li>Can think about application as a domain instead of architecture</li>
              </ul>
            `}
          >
            <Heading size={1} caps>Right tool for the job</Heading>
            <Table>
              <TableRow>
                <TableItem><Appear><Image width="400px" src={images.hammer}/></Appear></TableItem>
                <TableItem><Heading size={3} textColor="white">vs</Heading></TableItem>
                <TableItem><Appear><Image width="400px" src={images.screwdriver}/></Appear></TableItem>
              </TableRow>
            </Table>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>Easy to replace</li>
                <li>Lower risk of project. Client cames back.</li>
                <li>Hard to convince for refactor</li>
              </ul>
            `}
          >
            <Heading size={1} fit caps>Reduces a risk</Heading>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>Easy to replace</li>
                <li>Allows "hack"-ing</li>
              </ul>
            `}
          >
            <Heading size={1} fit caps>Flexible</Heading>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>Low risk projects they don't need. Refactor</li>
              </ul>
            `}
          >
            <Heading size={1} fit caps>Testable</Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps>EASY!!</Heading>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>Easy to introduce new people to the project</li>
              </ul>
            `}
          >
            <Heading size={1} caps><span>{"and... "}</span></Heading>
            <Heading size={3} fit caps textColor="white"><Appear><span>even EASIER!!</span></Appear></Heading>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>I'd like to explain some concepts before moving forward</li>
              </ul>
            `}
          >
            <Heading size={3} fit caps textColor="white">Functional</Heading>
            <Heading size={3} fit caps textColor="white">programming</Heading>
            <Appear>
              <Heading size={5} textColor="white" padding="70px 0 0 0">is not that hard :)</Heading>
            </Appear>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>It's all about Math</li>
                <li>Lambda calculus/Group theory</li>
                <li>Mathematicians are strict. There is no place for mistakes</li>
              </ul>
            `}
          >
            <Heading size={1} textSize="33vh" textColor="white" textFont="cursive">f(x)</Heading>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>Evil. It causes breaks in our programs.</li>
                <li>Computer hangs. And we are clearing a state. There is no single place where we can debug</li>
                <li>How to manage state</li>
              </ul>
            `}
          >
            <Heading size={1} fit caps textColor="white">State</Heading>
            <Appear>
              <Heading size={5} textColor="white" padding="70px 0 0 0">is pure evil :)</Heading>
            </Appear>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>When function causes some I/O</li>
                <li>When function sets sth outside her scope</li>
              </ul>
            `}
          >
            <Heading size={1} fit caps textColor="white" margin="-100px 0 0 0">Side</Heading>
            <Heading size={3} fit caps textColor="white">Effects</Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps textColor="white" margin="-100px 0 0 0">Pure</Heading>
            <Heading size={3} fit caps textColor="white">Function</Heading>
          </Slide>

          <Slide>
            <BlockQuote>
              <Quote textColor="white" textSize="50px">The function always evaluates the same result value given the same argument value(s). The function result value cannot depend on any hidden information or state that may change while program execution proceeds or between different executions of the program, nor can it depend on any external input from I/O devices</Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Slide>

          <Slide>
            <BlockQuote>
              <Quote textColor="white" textSize="50px">Evaluation of the result does not cause any semantically observable side effect or output, such as mutation of mutable objects or output to I/O devices</Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/pure-or-not.code")}
            ranges={[
              { loc: [0, 270], title: "IS IT PURE OR NOT?" },

              { loc: [0, 3] },
              { loc: [0, 3], title: "PURE" },
              { loc: [0, 3], title: "PURE", note: "Just pure" },


              { loc: [19, 20] },
              { loc: [19, 20], title: "NOT PURE" },
              { loc: [19, 20], title: "NOT PURE", note: "Each time different result" },
              { loc: [19, 20], image: images.randomImpl },


              { loc: [36, 37] },
              { loc: [36, 37], title: "NOT PURE" },
              { loc: [36, 37], title: "NOT PURE", note: "I/O Operations" },


              { loc: [59, 63] },
              { loc: [59, 63], title: "NOT PURE" },
              { loc: [59, 63], title: "NOT PURE", note: "State can cause different results" },


              { loc: [85, 94] },
              { loc: [85, 94], title: "PURE" },
              { loc: [85, 94], title: "SO PURE!!"},
              { loc: [85, 94], image: images.soPure },


              { loc: [114, 126] },
              { loc: [114, 126], title: "PURE" },
              { loc: [114, 126], title: "PURE", note: "Currying in action" },


              { loc: [153, 164] },
              { loc: [153, 164], title: "ALSO PURE" },


              { loc: [194, 206] },
              { loc: [194, 206], title: "IT DEPENDS" },
              { loc: [194, 206], title: "IT DEPENDS", note: "Concat is pure, but inner function is not" }
            ]}
          />

          <Slide
            notes={`
              <ul>
                <li>We treat all objects like values</li>
                <li>If there is even small change whole reference is changing</li>
              </ul>
            `}
          >
            <Heading size={1} fit caps textColor="white">Immutability</Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/immutability.code")}
            ranges={[
              { loc: [0, 6], title: "PRIMITIVES" },

              { loc: [18, 26], title: "MUTATION" },

              { loc: [39, 49], title: "IMMUTABLE" }
            ]}
          />

          <Slide bgColor="white">
            <Image width="80%" src={images.mapFilterReduce} />
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">FIRST</Heading>
            <Heading size={1} fit caps textColor="white">EXERCISE</Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">SUMMARY</Heading>
            <List>
              <Appear><ListItem>we know how to keep our objects immutable</ListItem></Appear>
              <Appear><ListItem>we know how to use basic map/filter functions</ListItem></Appear>
              <Appear><ListItem>we know how to use apply default properties</ListItem></Appear>
              <Appear><ListItem>🎂 npm test is v. usefull</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="white" bgImage={images.pipes} />

          <Slide notes="">
            <Heading size={1} caps textColor="white">MOAR!</Heading>
            <List>
              <Appear><ListItem>Monad</ListItem></Appear>
              <Appear><ListItem>"immutable auto-curried iteratee-first data-last methods" - lodash</ListItem></Appear>
              <Appear><ListItem>Pattern matching</ListItem></Appear>
              <Appear><ListItem>Currying</ListItem></Appear>
              <Appear><ListItem>Recursion</ListItem></Appear>
              <Appear><ListItem>First-class function</ListItem></Appear>
              <Appear><ListItem>Higher-order function</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} fit caps textColor="white">Our goal</Heading>
          </Slide>

          <Slide>
            <Link href="http://todomvc.com" target="_blank"><Heading size={1} fit caps textColor="white">TODO MVC</Heading></Link>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>Facebook presents in 2014</li>
                <li>Unidirectional data flow</li>
                <li>Solves problem presented by FB. Multiple places which uses same data</li>
                <li>Much different than MVC</li>
              </ul>
            `}
          >
            <Heading size={1} fit caps textColor="white">Flux</Heading>
            <Heading size={1} fit caps textColor="white">Architecture</Heading>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>All about state management</li>
                <li>Inspired by Elm, created by Dan Abramov <3</li>
                <li>Dan presented a lot of tooling, React Hot Loader, Time debugger etc.</li>
                <li>Enforces functional paradigm</li>
                <li>V. easy to write, but I don't recommend</li>
              </ul>
            `}
          >
            <Heading size={1} fit caps textColor="white">REDUX</Heading>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>All about state management</li>
                <li>Inspired by Elm, created by Dan Abramov <3</li>
                <li>Dan presented a lot of tooling, React Hot Loader, Time debugger etc.</li>
                <li>Enforces functional paradigm</li>
                <li>V. easy to write, but I don't recommend</li>
              </ul>
            `}
          >
            <Heading size={1} fit caps textColor="white">Redux</Heading>
            <List>
              <Appear><ListItem>Elm inspired</ListItem></Appear>
              <Appear><ListItem>Enforces functional paradigm</ListItem></Appear>
              <Appear><ListItem>Creator proved to community that enables lot of tooling</ListItem></Appear>
              <Appear><ListItem>Most popular across flux-like architectures</ListItem></Appear>
            </List>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>Talk about data flow in app</li>
              </ul>
            `}
            bgColor="#f5f4f0"
          >
            <Image height="600px" src={images.reduxFlow} />
            <Link href="http://staltz.com/unidirectional-user-interface-architectures.html" target="_blank">http://staltz.com/unidirectional-user-interface-architectures.html</Link>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>Plain object</li>
                <li>Action creators later</li>
                <li>Represents minimal object that can cause change in store</li>
                <li>It is passed to reducers</li>
              </ul>
            `}
          >
            <Heading size={1} caps textColor="white">Action</Heading>
            <CodePane
              textSize="25px"
              lang="js"
              source={`
                var action = {
                  type: 'ADD_TODO',
                  todo: {
                    name: 'Homework for' +
                          'english class'
                  }
                };
              `}
            />
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>Plain object</li>
                <li>Immutable</li>
                <li>Read-only</li>
                <li>Keeps all major states in app</li>
              </ul>
            `}
          >
            <Heading size={1} caps textColor="white">State</Heading>
            <CodePane
              textSize="25px"
              lang="js"
              source={`
                var state = {
                  todos: [
                    { name: 'first'},
                    { name: 'second'}
                  ],
                  isFetching: false,
                  isError: false
                };
              `}
            />
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">Store</Heading>
            <List>
              <Appear><ListItem>Single source of truth</ListItem></Appear>
              <Appear><ListItem>Read-only</ListItem></Appear>
              <Appear><ListItem>Runs reducer</ListItem></Appear>
              <Appear><ListItem>Notifies listener</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">Reducer</Heading>
            <List>
              <Appear><ListItem>Pure function</ListItem></Appear>
              <Appear><ListItem>Takes state and action</ListItem></Appear>
              <Appear><ListItem>Returns next state</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="">
            <Heading size={1} caps textColor="white">Reducer</Heading>
            <CodePane
              textSize="25px"
              lang="js"
              source={`
                function reducer(state, action) {
                  switch(action.type) {
                    case 'ADD_TODO':
                      return $.extend({}, state, {
                          todos: action.todos
                            .concat([action.todo])
                        });

                    default:
                      return state;
                  }
                }
              `}
            />
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">SECOND</Heading>
            <Heading size={1} fit caps textColor="white">EXERCISE</Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">SUMMARY</Heading>
            <List>
              <Appear><ListItem>we know how to keep our state in one global object</ListItem></Appear>
              <Appear><ListItem>we know how data are flowing across Flow loop</ListItem></Appear>
              <Appear><ListItem>we know how structure redux code</ListItem></Appear>
            </List>
          </Slide>

          <Slide
            notes={`
              <ul>
                <li>It't hot approach now</li>
                <li>Angular 2/Ember/React are proving that is correct way</li>
                <li>Composition makes components composable</li>
              </ul>
            `}
          >
            <Heading size={1} fit caps textColor="white">COMPONENTS</Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps textColor="white">REAL WORLD</Heading>
            <Heading textSize="40vh" caps textColor="white">APP</Heading>
          </Slide>

          <Slide>
            <Image height="600px" src={images.fbPre} />
          </Slide>

          <Slide>
            <Image height="600px" src={images.fbPost} />
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">THIRD</Heading>
            <Heading size={1} fit caps textColor="white">EXERCISE</Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">SUMMARY</Heading>
            <List>
              <Appear><ListItem>we know how to connect View to store</ListItem></Appear>
              <Appear><ListItem>we know how split UI into multiple Components</ListItem></Appear>
              <Appear><ListItem>we know how to keep everything simple ♥️</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">THANK YOU</Heading>
            <Heading size={1} textSize={140} caps textColor="white">:)</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
