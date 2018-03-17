export default function () {
  this.transition(
    this.fromRoute('index'),
    this.toRoute(['projects', 'contact']),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('projects'),
    this.toRoute('contact'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
