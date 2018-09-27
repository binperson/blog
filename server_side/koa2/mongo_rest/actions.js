module.exports = function generateActions(model) {
  return {

    findAll:async function(next) {
      await next;
      var error, result;
      try {
        var conditions = {};
        var query = this.request.query;
        if (query.conditions) {
          conditions = JSON.parse(query.conditions);
        }
        var builder = model.find(conditions);
        ['limit', 'skip', 'sort'].forEach(function(key){
          if (query[key]) {
            let arg = query[key];
            if (key == 'limit' || key == 'skip'){
              arg = parseInt(arg);
            }
            builder[key](arg);
          }
        })
        result = await builder.exec();
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },

    findById: async function(next) {
      await next;
      var error, result;
      try {
        result = await model.findById(this.params.id).exec();
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },

    deleteById: async function(next) {
      await next;
      var error, result;
      try {
        result = await model.findByIdAndRemove(this.params.id).exec();
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },

    replaceById: async function(next) {
      await next;
      var error, newDocument, result;
      try {
        await model.findByIdAndRemove(this.params.id).exec();
        newDocument = this.request.body;
        newDocument._id = this.params.id;
        result = await model.create(newDocument);
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },

    updateById: async function(next) {
      await next;
      var error, result;
      console.log(this.params.id, this.request.body, typeof this.request.body)
      try {
        result = await model.findByIdAndUpdate(this.params.id, this.request.body, {new: true}).exec();
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },
    
    create: async function(next) {
      await next;
      var error, result;
      try {
        result = await model.create(this.request.body);
        this.status = 201;
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    }
  };
};