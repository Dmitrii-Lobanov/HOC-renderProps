import React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

// Props is the type of our class's this.props, and object is the type of this.state
class HelloClass extends React.Component<Props, object> {
  render() {
    // const { name, enthusiasmLevel = 1 } = this.props;

    // if (enthusiasmLevel <= 0) {
    //   throw new Error('You could be more enthusiastic.');
    // }

    return (
      <div className="hello">
        <div className="greeting">
          {/* Hello {name + getExclamationMarks(enthusiasmLevel)} */}
        </div>
      </div>
    )
  }
}

export default HelloClass;