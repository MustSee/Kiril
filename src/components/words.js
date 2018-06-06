import React from 'react';
import { isEqual } from 'lodash';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import words from './../datas/bulgarian/words';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 ${grid}px 0 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  display: "flex",
  padding: grid,
  overflow: "auto"
});

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default class Words extends React.Component {
  constructor() {
    super();
    this.state = {
      item: [],
      nbrLetters: 0,
      currentWord: 0,
      goodAnswer: [],
      isAnswered: false,
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {
    let currentWord = words[this.state.currentWord];
    let items = [];
    let letters = currentWord.split('');
    letters.map((letter, index) => {
      return items.push({id: letter + index, content: letter})
    });
    let shuffled = shuffle(items);
    console.log('shuffled', shuffled);
    console.log('letters', letters);
    this.setState({
      item : shuffled,
      goodAnswer: letters,
      nbrLetters: letters.length
    });
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const item = reorder(
      this.state.item,
      result.source.index,
      result.destination.index
    );

    this.setState({
      item
    }, () => {
      let res = [];
      res = this.state.item.map(state => {
        return state.content;
      });
      if (isEqual(res, this.state.goodAnswer)) {
        this.setState({isAnswered: true});
      }
    });
  }

  render() {
    return(
      <React.Fragment>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {this.state.item.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {this.state.isAnswered ? <div>Réussi !!</div> : null }
      </React.Fragment>
    )
  }
}