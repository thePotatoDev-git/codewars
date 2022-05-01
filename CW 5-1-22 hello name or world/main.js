function hello(name) {
    return name ? 'Hello, ' + name.charAt(0).toUpperCase() + name.substring(1).toLowerCase() + '!'  : 'Hello, World!';
  }