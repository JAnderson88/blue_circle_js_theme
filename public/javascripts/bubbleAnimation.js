() => {
    return {
        secret: (data) => {
            if (this.classList.contains('centered')){
                this.classList.toggle('centered')
            } else {
                bubbles.forEach(function(bub){
                    if (bub.classList.contains('centered'))
                        bub.classList.toggle('centered')
                })
                if (!this.classList.contains('centered'))
                    this.classList.toggle('centered')
            }
        }
    }
}

