import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import MyHeader from './components/header';

const API_KEY = 'AIzaSyBQzgSB0LbfFHmfD9uSq-bfWUfYw4L7bFY';


// Create a new component class. This component should produce some HTML
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('SingSing');
  }

  videoSearch (term) {
    YTSearch({key: API_KEY, term: term}, (videos) =>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 400);
    return (
      <div>
        <MyHeader />
        <SearchBar onTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo=> this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (component instance, target)
ReactDOM.render(<App />, document.getElementById('app'));
