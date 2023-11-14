import { jwtDecode } from "jwt-decode";

class AuthService {
  getProfile() {
    return jwtDecode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return true
    return token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    if (!token) {
      return true; // Token is not available, consider it as expired
    }

    // Decode the token to get its expiration time that was set by the server
    const decoded = jwtDecode(token);

    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }

    // If token hasn't passed its expiration time, return false
    return false;
  }

  getToken() {
    return localStorage.getItem("id_token")
  }
getUsername(){
  return localStorage.getItem("username")
}
  login(idToken, username) {
    localStorage.setItem("id_token", idToken);
    localStorage.setItem("username", username);

    // window.location.assign("/home");
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.href = "/login";
  }
}

export default new AuthService();
