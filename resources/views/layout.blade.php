<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  @include('partials.head')
  <body class="text-white bg-gray-900 font-mono">
    @yield('app')
    <script src="{{ mix('js/app.js') }}" defer></script>
  </body>
</html>
