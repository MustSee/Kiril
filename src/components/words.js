import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import words from './../datas/bulgarian/words';

const getItems = word =>
  Array.from({ length: word.length}, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

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

export default class Words extends React.Component {
  constructor() {
    super();
    this.state = {
      item: [],
      nbrLetters: 0,
      currentWord: 0
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {
    console.log(words);
    let currentWord = words[this.state.currentWord];
    let arrayLetter = [];
    let letters = currentWord.split('').map((letter, index) => {
      console.log(letter);
      return arrayLetter.push({id: letter + index, content: letter})
    });
    console.log(arrayLetter);
    this.setState({
      item : arrayLetter,
      nbrLetters: letters.length
    });
  }

  onDragEnd(result) {
    console.log('result', result);
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
    });
  }

  render() {
    return(
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
    )
  }
}