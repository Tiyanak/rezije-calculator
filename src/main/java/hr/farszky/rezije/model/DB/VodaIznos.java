package hr.farszky.rezije.model.DB;

import javax.persistence.*;

/**
 * Created by Igor Farszky on 24.9.2017..
 */
@Entity
@Table(name = "voda_iznos")
public class VodaIznos {

    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="voda_iznos_seq")
    @SequenceGenerator(name="voda_iznos_seq", sequenceName="voda_iznos_seq", allocationSize=1)
    private Integer id;

    @Column(name = "fix_voda")
    private Double fixVoda;

    @Column(name = "fix_odvodnja")
    private Double fixOdvodnja;

    @Column(name = "voda_po_metru")
    private Double vodaPoMetru;

    @Column(name = "odvodnja_po_metru")
    private Double odvodnjaPoMetru;

    @Column(name = "pdv_osnovica")
    private Double pdvOsnovica;

    @Column(name = "pdv")
    private Double pdv;

    @Column(name = "nak_za_koristenje")
    private Double nakZaKoristenje;

    @Column(name = "nak_za_zastitu")
    private Double nakZaZastitu;

    @Column(name = "nak_za_razvoj")
    private Double nakZaRazvoj;

    @Column(name = "ukupno")
    private Double ukupno;

}
