using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Cardapp.WebApp.Models
{
    [Table("T_CPP_ITEM_CARDAPIO")]
    public class Item
    {
        [Key]
        [Column("CD_ITEM_CARDAPIO")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CodigoItem { get; set; }

        [Column("ST_DESTAQUE")]
        [Display(Name = "Destaque")]
        public char Destaque { get; set; }

        [Column("NM_ITEM_CARDAPIO")]
        [Display(Name = "Nome")]
        public string Nome { get; set; }

        [Column("DS_ITEM_CARDAPIO")]
        [Display(Name = "Descrição")]
        public string Descricao { get; set; }

        [Column("VL_ITEM_CARDAPIO")]
        [Display(Name = "Preço")]
        public decimal Preco { get; set; }

        [Column("VL_CALORICO")]
        [Display(Name = "Valor calórico")]
        public int ValCalorico { get; set; }

        [Column("FL_FOTO_IC")]
        [Display(Name = "Foto")]
        public string Foto { get; set; }
    }
}
