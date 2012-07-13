// Generated by CoffeeScript 1.3.3

describe("Hoodie", function() {
  beforeEach(function() {
    this.hoodie = new Hoodie('http://couch.example.com');
    return spyOn($, "ajax").andReturn($.Deferred());
  });
  describe("new", function() {
    it("should store the CouchDB URL", function() {
      var hoodie;
      hoodie = new Hoodie('http://couch.example.com');
      return expect(hoodie.baseUrl).toBe('http://couch.example.com');
    });
    it("should remove trailing slash from passed URL", function() {
      var hoodie;
      hoodie = new Hoodie('http://couch.example.com/');
      return expect(hoodie.baseUrl).toBe('http://couch.example.com');
    });
    return it("should default the CouchDB URL to ''", function() {
      var hoodie;
      hoodie = new Hoodie;
      return expect(hoodie.baseUrl).toBe('');
    });
  });
  return describe("request(type, path, options)", function() {
    _when("request('GET', '/')", function() {
      beforeEach(function() {
        var args;
        this.hoodie.request('GET', '/');
        return this.args = args = $.ajax.mostRecentCall.args[0];
      });
      it("should send a GET request to http://couch.example.com/", function() {
        expect(this.args.type).toBe('GET');
        return expect(this.args.url).toBe('http://couch.example.com/');
      });
      it("should set `dataType: 'json'", function() {
        return expect(this.args.dataType).toBe('json');
      });
      it("should set `xhrFields` to `withCredentials: true`", function() {
        return expect(this.args.xhrFields.withCredentials).toBe(true);
      });
      it("should set `crossDomain: true`", function() {
        return expect(this.args.crossDomain).toBe(true);
      });
      return it("should return a promise", function() {
        var promise;
        promise = $.Deferred();
        $.ajax.andReturn(promise);
        return expect(this.hoodie.request('GET', '/')).toBe(promise);
      });
    });
    return _when("request 'POST', '/test', data: funky: 'fresh'", function() {
      beforeEach(function() {
        var args;
        this.hoodie.request('POST', '/test', {
          data: {
            funky: 'fresh'
          }
        });
        return this.args = args = $.ajax.mostRecentCall.args[0];
      });
      return it("should send a POST request to http://couch.example.com/test", function() {
        expect(this.args.type).toBe('POST');
        return expect(this.args.url).toBe('http://couch.example.com/test');
      });
    });
  });
});
