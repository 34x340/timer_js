const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
  };
  const timer = {
    intervalId: null,
  
    start () {
      const startTime = Date.now(); 
  
      this.intervalId = setInterval(() => {
        const currentTime = Date.now();
                              
        const deltaTime = currentTime - startTime;
  
        console.log('deltaTime: ', deltaTime);
      },1000)
    },
    stop() {
          clearInterval(this.intervalId);
      }
  }
  refs.startBtn.addEventListener('click', () => {
    timer.start()
  })
  refs.stopBtn.addEventListener('click', () => {
    timer.stop()
  })
  /*
   * - Приймає час в мілісекундах
   * - Вираховує скільки в них вміщується годин/хвилин/секунд
   * - Повертає об'єкт з властивостями hours, mins, secs
   */
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }