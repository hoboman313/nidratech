export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute(['projects', 'clients', 'contact']),
    this.media('(min-width: 992px)'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('projects'),
    this.toRoute(['clients', 'contact']),
    this.media('(min-width: 992px)'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('clients'),
    this.toRoute('contact'),
    this.media('(min-width: 992px)'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
