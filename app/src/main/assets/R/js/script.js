
var conv = new Converter();

(function (d) {

	const App = {
		run() {
			this.cacheDOM()
			this.bindListeners()
		},
		f$dec(e) {
			try {
				this.txt = e.target.value;
				this.$msg.style.transform = 'translateY(100%)';
				if (this.txt.length > 0) {
					this.$bin.value = conv.toBin(this.txt, 10);
					this.$hex.value = conv.toHex(this.txt, 10);
					this.$oct.value = conv.toOct(this.txt, 10);
				} else {
					this.clearAll()
				}
			} catch (err) {
				this.$msg.textContent = err
				this.$msg.style.transform = 'translateY(0%)';
			}
		},
		f$bin(e) {
			try {
				this.txt = e.target.value;
				this.$msg.style.transform = 'translateY(100%)';
				if (this.txt.length > 0) {
					this.$dec.value = conv.toDec(this.txt, 2);
					this.$hex.value = conv.toHex(this.txt, 2);
					this.$oct.value = conv.toOct(this.txt, 2);
				} else {
					this.clearAll()
				}
			} catch (err) {
				this.$msg.textContent = err
				this.$msg.style.transform = 'translateY(0%)';
			}
		},
		f$hex(e) {
			try {
				this.txt = e.target.value;
				this.$msg.style.transform = 'translateY(100%)';
				if (this.txt.length > 0) {
					this.$dec.value = conv.toDec(this.txt, 16);
					this.$bin.value = conv.toBin(this.txt, 16);
					this.$oct.value = conv.toOct(this.txt, 16);
				} else {
					this.clearAll()
				}
			} catch (err) {
				this.$msg.textContent = err
				this.$msg.style.transform = 'translateY(0%)';
			}
		},
		f$oct(e) {
			try {
				this.txt = e.target.value;
				this.$msg.style.transform = 'translateY(100%)';
				if (this.txt.length > 0) {
					this.$dec.value = conv.toDec(this.txt, 8);
					this.$bin.value = conv.toBin(this.txt, 8);
					this.$hex.value = conv.toHex(this.txt, 8);
				} else {
					this.clearAll()
				}
			} catch (err) {
				this.$msg.textContent = err
				this.$msg.style.transform = 'translateY(0%)';
			}
		},
		clearAll() {
			this.$dec.value = ''
			this.$bin.value = ''
			this.$hex.value = ''
			this.$oct.value = ''
		},
		bindListeners() {
			this.$dec.addEventListener('keyup', this.f$dec.bind(this))
			this.$bin.addEventListener('keyup', this.f$bin.bind(this))
			this.$hex.addEventListener('keyup', this.f$hex.bind(this))
			this.$oct.addEventListener('keyup', this.f$oct.bind(this))
		},
		cacheDOM() {
			this.$dec = d.getElementById('dec')
			this.$bin = d.getElementById('bin')
			this.$hex = d.getElementById('hex')
			this.$oct = d.getElementById('oct')
			this.$msg = d.querySelector('.message')
		}
	}

	App.run()

})(document)
