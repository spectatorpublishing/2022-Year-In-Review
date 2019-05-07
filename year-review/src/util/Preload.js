import React, { Component } from 'react';

const PreloadContext = React.createContext()

class PreloadProvider extends Component {
  constructor() {
    super()
    this.isRunning = false
    this.result = Promise.resolve();
    this.preloaded = []
    this.preloadedLinks = []
    this.preloadImage = this.preloadImage.bind(this)
  }

  preloadImage(...images) {
    if (document.readyState !== "loading") {
      images.forEach(image => {
        if (!this.preloadedLinks.includes(image)) {
          this.result = this.result.then(() =>
            (console.debug(`Preloading ${image}`),
            new Promise(res => {
              console.log("test")
              let img = new Image()
              img.onload = () => res()
              img.src = image
              this.preloaded.push(img)
              this.preloadedLinks.push(image)
            }))
          )
        }
      })
    }
    else document.addEventListener('DOMContentLoaded', () => this.preloadImage(...images))
  }

  render() {
    return <PreloadContext.Provider value={this.preloadImage}>
      {this.props.children}
    </PreloadContext.Provider>
  }
}

export { PreloadProvider as default, PreloadContext }