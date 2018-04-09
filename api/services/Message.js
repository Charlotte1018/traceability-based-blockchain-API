class Message {

    constructor(code, data) {
        this.code = code;
        this.data = data
    }



    /**
     * 成功消息类
     * @param {*} code 
     * @param {*} data 
     */
    static successMessage(data, code) {

        this.code = 0;
        this.data = data||'';

        return {
            code: this.code,
            data: this.data
        }
    }
    /**
     * 错误消息类
     * @param {*} code 
     * @param {*} data 
     */
    static errorMessage(data, code) {

        this.code = code||1;
        this.data = data||'';

        return {
            code: this.code,
            data: this.data
        }
    }
}

module.exports = Message