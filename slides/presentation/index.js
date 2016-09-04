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
  Fit,
  Text
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
  reduxFlow: require("../assets/images/redux.jpg")
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
          <Slide bgImage={images.cover} notes="tell about that is your opinion dumbass. Some things will be obvious">
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

          <Slide>
            <Heading size={1} fit caps>
              Rules
            </Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} caps>
              What's our today achievement?
            </Heading>
            <List>
              <Appear><ListItem>Learn how to split code</ListItem></Appear>
              <Appear><ListItem>Learn why structure of code is so important</ListItem></Appear>
              <Appear><ListItem>Learn basics of functional programming</ListItem></Appear>
              <Appear><ListItem>Learn pretty and shinny architecture: Flux 🌟</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="">
            <Heading size={1} caps>
              What's our today achievement?
            </Heading>
            <Link target="_blank" href="http://todomvc.com">
              <Heading size={3} caps>
                TODO MVC
              </Heading>
            </Link>
          </Slide>

          <Slide notes="">
            <Heading size={1} caps fill>
              What is a good architecture?
            </Heading>
          </Slide>

          <Slide notes="nails">
            <Heading size={1} caps>Right tool to job</Heading>
            <Table>
              <TableRow>
                <TableItem><Appear><Image width="400px" src={images.hammer}/></Appear></TableItem>
                <TableItem><Heading size={3}>vs</Heading></TableItem>
                <TableItem><Appear><Image width="400px" src={images.screwdriver}/></Appear></TableItem>
              </TableRow>
            </Table>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps>Reduces a risk</Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps>Flexible</Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps>Testable</Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps>EASY!!</Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} caps><span>{"and... "}</span></Heading>
            <Heading size={3} fit caps textColor="white"><Appear><span>even EASIER!!</span></Appear></Heading>
          </Slide>

          <Slide notes="">
            <Heading size={3} fit caps textColor="white">Functional</Heading>
            <Heading size={3} fit caps textColor="white">programming</Heading>
            <Appear>
              <Heading size={5} textColor="white" padding="70px 0 0 0">is not that hard :)</Heading>
            </Appear>
          </Slide>

          <Slide notes="">
            <Heading size={1} textSize="33vh" textColor="white" textFont="cursive">f(x)</Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">State</Heading>
            <Appear>
              <Heading size={5} textColor="white" padding="70px 0 0 0">is pure evil :)</Heading>
            </Appear>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white" margin="-100px 0 0 0">Side</Heading>
            <Heading size={3} fit caps textColor="white">Effects</Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white" margin="-100px 0 0 0">Pure</Heading>
            <Heading size={3} fit caps textColor="white">Function</Heading>
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


              { loc: [36, 37] },
              { loc: [36, 37], title: "NOT PURE" },
              { loc: [36, 37], title: "NOT PURE", note: "I/O Operations" },


              { loc: [59, 63] },
              { loc: [59, 63], title: "NOT PURE" },
              { loc: [59, 63], title: "NOT PURE", note: "State can cause different results" },


              { loc: [85, 94] },
              { loc: [85, 94], title: "PURE" },
              { loc: [85, 94], title: "SO PURE!!" /*, image: "State can cause different results" */},


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

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">Immutability</Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">SUMMARY</Heading>
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

          <Slide bgColor="white" bgImage={images.pipes} />

          <Slide notes="">
            <Heading size={1} caps textColor="white">MOAR!</Heading>
            <List>
              <Appear><ListItem>Monad</ListItem></Appear>
              <Appear><ListItem>"immutable auto-curried iteratee-first data-last methods" lodash</ListItem></Appear>
              <Appear><ListItem>Pattern matching</ListItem></Appear>
              <Appear><ListItem>Currying</ListItem></Appear>
              <Appear><ListItem>Recursion</ListItem></Appear>
              <Appear><ListItem>First-class function</ListItem></Appear>
              <Appear><ListItem>Higher-order function</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} fit caps textColor="white">Our achievement</Heading>
          </Slide>

          <Slide>
            <Link href="http://todomvc.com" target="_blank"><Heading size={1} fit caps textColor="white">TODO MVC</Heading></Link>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">Flux</Heading>
            <Heading size={1} fit caps textColor="white">Architecture</Heading>
          </Slide>

          <Slide notes="I mentioned that state is evil so we need to fight with him.">
            <Heading size={1} fit caps textColor="white">REDUX</Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">Redux</Heading>
            <List>
              <Appear><ListItem>Elm inspired</ListItem></Appear>
              <Appear><ListItem>Enforces functional paradigm</ListItem></Appear>
              <Appear><ListItem>Creator proved to community that enables lot of tooling</ListItem></Appear>
              <Appear><ListItem>Most popular across flux-like architectures</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="" bgColor="#f5f4f0">
            <Image height="600px" src={images.reduxFlow} />
            <Link href="http://staltz.com/unidirectional-user-interface-architectures.html" target="_blank">http://staltz.com/unidirectional-user-interface-architectures.html</Link>
          </Slide>

          <Slide notes="">
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

          <Slide notes="">
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
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">THIRD</Heading>
            <Heading size={1} fit caps textColor="white">EXERCISE</Heading>
          </Slide>

          <Slide notes="">
            <Heading size={1} fit caps textColor="white">SUMMARY</Heading>
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
