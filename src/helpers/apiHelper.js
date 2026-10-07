const apiHelper = (() => {
  async function fetchData(url, options = {}) {
    const urlQuery = url.includes("?") ? url.split("?")[1] : "";
    const urlWithoutQuery = url.replace(`?${urlQuery}`, "");
    const fixUrl = urlWithoutQuery.endsWith("/")
      ? urlWithoutQuery.slice(0, -1)
      : urlWithoutQuery;
    const fullUrl = fixUrl + (urlQuery ? `?${urlQuery}` : "");

    const token = getAccessToken();
    const headers = {
      ...(options.headers || {}),
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return fetch(fullUrl, {
      ...options,
      mode: "cors",
      headers,
    });
  }

  function putAccessToken(token) {
    if (!token) {
      localStorage.removeItem("accessToken");
      document.cookie = "accessToken=; path=/; max-age=0; SameSite=Lax";
    } else {
      localStorage.setItem("accessToken", token);
      document.cookie = `accessToken=${encodeURIComponent(token)}; path=/; max-age=86400; SameSite=Lax`;
    }
  }

  function getAccessToken() {
    const fromStorage = localStorage.getItem("accessToken");
    if (fromStorage) return fromStorage;

    const match = document.cookie.match(/(?:^|; )accessToken=([^;]*)/);
    if (match) {
      const token = decodeURIComponent(match[1]);
      localStorage.setItem("accessToken", token);
      return token;
    }
    return null;
  }

  return {
    fetchData,
    putAccessToken,
    getAccessToken,
  };
})();

export default apiHelper;