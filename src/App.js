import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Lorem ipsum dolor sit amet.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Web Developer"
    },
    shows: false,
    mounted: 0
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ mounted: this.state.mounted + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, mounted } = this.state;
    return (
      <div>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="profile" />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Component has been mounted for {mounted} seconds.</p>
      </div>
    );
  }
}

export default App;
