class ResponseModel {
    constructor(success, status, result, message) {
        this.success = success;
        this.status = status;
        this.result = result;
        this.message = message;
    }
}

module.exports = ResponseModel;