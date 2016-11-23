console.log('Loaded!');
function loadLoginForm () {
         var loginHtml = ` <h3>Login/Register Here for Posting Comments on the Articles!</h3>
        <div class="row control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter Your Username" required>
            </div>
        </div>
        <div class="row control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" required>
            </div>
        </div>
        <br/>
        <input type="submit" class="btn btn-default" id="login_btn" value="Login" />
        <input type="submit" class="btn btn-default" id="register_btn" value="Register" />
        `;}