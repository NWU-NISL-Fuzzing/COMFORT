var NISLFuzzingFunc = function() {
    return 0 === this.state.pos && this.setState({
        pos: this.state.pos
    }), this;
};
NISLFuzzingFunc();
