window.onload = function() {
    var rythm = new Rythm()
  
    const talk = (elem, value, options = {}) => {
        const max = options.max || 2
        const min = options.min || 0.3
        const scale = (max - min) * value
        elem.style.transform = `scaleY(${min + scale})`
    }
    const resetTalk = elem => {
        elem.style.transform = ''
    }
     
    
    const pulse = (elem, value, options = {}) => {
        const max = options.max || 1.10
        const min = options.min || 0.75
        const scale = (max - min) * value
        elem.style.transform = `scale(${min + scale})`
    }
    const resetPulse = elem => {
        elem.style.transform = ''
    }
      
    rythm.addRythm('pulse', { dance: pulse, reset: resetPulse }, 0, 20)

    rythm.addRythm('scale', { dance: talk, reset: resetTalk }, 50, 40)
    rythm.addRythm('pulse1', 'pulse', 0, 10)
    rythm.addRythm('pulse2', 'pulse', 0, 10, { min: 0.4, max: 0.7 })
    rythm.addRythm('pulse3', 'pulse', 0, 10, { min: 0.9, max: 1.40 })
    rythm.addRythm('jump1', 'jump', 0, 10)
    rythm.addRythm('jump2', 'jump', 150, 40, { min: -20, max: 20 })
    rythm.addRythm('shake1', 'shake', 0, 10)
    rythm.addRythm('shake2', 'shake', 0, 10, { min: 0, max: 20 })
    rythm.addRythm('shake3', 'shake', 0, 10, { direction: 'left'})
    rythm.addRythm('twist1', 'twist', 00, 10)
    rythm.addRythm('twist11', 'twist', 00, 10, { direction: 'left'})
    rythm.addRythm('twist2', 'twist', 0, 10, { min: 20, max: 180 })
    rythm.addRythm('twist3', 'twist', 0, 10, { direction: 'left' })
    rythm.addRythm('vanish1', 'vanish', 0, 10)
    rythm.addRythm('vanish2', 'vanish', 0, 10, { reverse: true })
    rythm.addRythm('color1', 'color', 0, 10)
    rythm.addRythm('color2', 'color', 0, 10, {
      from: [0, 0, 255],
      to: [255, 0, 255],
    })
    rythm.addRythm('color3', 'color', 0, 10, {
      from: [255, 255, 0],
      to: [255, 0, 0],
    })
    rythm.addRythm('borderColor1', 'borderColor', 0, 10)
    rythm.addRythm('borderColor2', 'borderColor', 0, 10, {
      from: [0, 0, 255],
      to: [255, 0, 255],
    })
    rythm.addRythm('borderColor3', 'borderColor', 0, 10, {
      from: [255, 255, 0],
      to: [255, 0, 0],
    })
    rythm.addRythm('borderWidth1', 'borderWidth', 0, 2)
    rythm.addRythm('borderWidth2', 'borderWidth', 0, 2, { min: 2, max: 9 })
    rythm.addRythm('fontSize1', 'fontSize', 0, 2)
    rythm.addRythm('fontSize2', 'fontSize', 0, 2, { min: 0.9, max: 1.1 })
    rythm.addRythm('radius1', 'radius', 0, 10, { min: 0, max: 30 })
    rythm.addRythm('radius2', 'radius', 0, 10, { reverse: true, min: 0, max: 30 })
    rythm.addRythm('blur1', 'blur', 0, 10)
    rythm.addRythm('blur2', 'blur', 0, 10, { reverse: true })
    rythm.addRythm('blur3', 'blur', 0, 10, { max: 16 })
    rythm.addRythm('swing1', 'swing', 0, 10)
    rythm.addRythm('swing2', 'swing', 0, 10, { curve: 'up' })
    rythm.addRythm('swing3', 'swing', 0, 10, { direction: 'left' })
    rythm.addRythm('swing4', 'swing', 0, 10, { radius: 10 })
    rythm.addRythm('neon1', 'neon', 0, 10)
    rythm.addRythm('neon2', 'neon', 0, 10, {
      from: [0, 0, 255],
      to: [255, 0, 255],
    })
    rythm.addRythm('neon3', 'neon', 0, 10, {
      from: [255, 255, 0],
      to: [255, 0, 0],
    })
    rythm.addRythm('kern1', 'kern', 0, 10, { min: -5, max: 5 })
    rythm.addRythm('kern2', 'kern', 0, 10, { min: -5, max: 5, reverse: true })
    rythm.addRythm('thanks', 'shake', 0, 10, { min: -10, max: 10 })
    rythm.addRythm('contributor-avatar', 'pulse', 0, 10, { min: 0.5, max: 1.1 })
    rythm.addRythm('contributor-login-link', 'kern', 0, 10, { min: 0, max: 5 })
    rythm.addRythm('tilt1', 'tilt', 0, 10)
    rythm.addRythm('tilt2', 'tilt', 0, 10, { reverse: true })
    rythm.addRythm('fontColor1', 'fontColor', 0, 10)
    rythm.addRythm('fontColor2', 'fontColor', 0, 10, {
      from: [0, 0, 255],
      to: [255, 0, 255],
    })
  
    var onMicClick = function(event) {
        if (rythm.stopped === false) {
          rythm.stop()
        }
        rythm.plugMicrophone().then(function() {
          rythm.start()
        })
        
        event.preventDefault();
      }
    
      var onStartClick = function(event) {
        if (rythm.stopped === false) {
          rythm.stop()
        }
        rythm.setMusic('music/2scratch.mp3')
        rythm.start()

        event.preventDefault();
      }
    
      var onStopClick = function(event) {
        if (rythm.stopped === false) {
          rythm.stop()
        }

        event.preventDefault();
      }
    
      var onStopResetClick = function(event) {
        if (rythm.stopped === false) {
          rythm.stop(true)
        }

        event.preventDefault();
      }
    
      document.getElementById('mic').addEventListener('click', onMicClick)
      document.getElementById('start').addEventListener('click', onStartClick)
      document.getElementById('stop').addEventListener('click', onStopClick)
}
  