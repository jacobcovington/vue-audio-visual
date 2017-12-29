window.AudioContext = jest.fn().mockImplementation(() => {
  return {
    createMediaElementSource: () => {
      return { connect: () => {} }
    },
    createAnalyser: () => {
      return {
        connect: () => {},
        getByteFrequencyData: () => {}
      }
    }
  }
})

export default window.AudioContext