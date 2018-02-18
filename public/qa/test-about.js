var suite, assert, test, $

suite('"About" Page Test', function () {
  test('pageshould contain link to contact page', function () {
    assert($('a[href="/contact"]').length)
  })
})
