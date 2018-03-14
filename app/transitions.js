export default function () {
  this.transition(
    this.fromRoute('index'),
    this.toRoute(['past-work', 'contact']),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('past-work'),
    this.toRoute('contact'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
