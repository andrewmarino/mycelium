<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  @include('partials.head')
  <body class="{{ $bodyClass ?? '' }}">
    @yield('app')
    <script src="{{ mix('js/app.js') }}" defer></script>
  </body>
</html>
