<ion-button id="open-action-sheet">Open</ion-button>
<ion-action-sheet trigger="open-action-sheet" header="Actions"></ion-action-sheet>

<script>
  var actionSheet = document.querySelector('ion-action-sheet');

  actionSheet.buttons = [
    {
      text: 'Suprimer',
      role: 'destructive',
      data: {
        action: 'suprimer',
      },
    },
    {
      text: 'Partager',
      data: {
        action: 'partager',
      },
    },
    {
      text: 'Annuler',
      role: 'annuler',
      data: {
        action: 'annuler',
      },
    },
  ];
</script>