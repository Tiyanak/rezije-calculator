package hr.farszky.rezije.model.DB;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Igor Farszky on 23.9.2017..
 */
@Entity
@Table(name = "voda")
public class Voda {

    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="voda_seq")
    @SequenceGenerator(name="voda_seq", sequenceName="voda_seq", allocationSize=1)
    private Integer id;

    @Column(name = "kucanstvo")
    private String kucanstvo;

    @Column(name = "mjesec")
    private Integer mjesec;

    @Column(name = "godina")
    private Integer godina;

    @Column(name = "datum_unosa")
    private Date datum_unosa;

    @ManyToOne
    @JoinColumn(name = "brojilo")
    private VodaBrojilo brojilo;

    @ManyToOne
    @JoinColumn(name = "iznos")
    private VodaIznos iznos;

    @ManyToOne
    @JoinColumn(name = "konstante")
    private VodaKonstante konstante;

    public Voda() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getKucanstvo() {
        return kucanstvo;
    }

    public void setKucanstvo(String kucanstvo) {
        this.kucanstvo = kucanstvo;
    }

    public Integer getMjesec() {
        return mjesec;
    }

    public void setMjesec(Integer mjesec) {
        this.mjesec = mjesec;
    }

    public Integer getGodina() {
        return godina;
    }

    public void setGodina(Integer godina) {
        this.godina = godina;
    }

    public Date getDatum_unosa() {
        return datum_unosa;
    }

    public void setDatum_unosa(Date datum_unosa) {
        this.datum_unosa = datum_unosa;
    }

    public VodaBrojilo getBrojilo() {
        return brojilo;
    }

    public void setBrojilo(VodaBrojilo brojilo) {
        this.brojilo = brojilo;
    }

    public VodaIznos getIznos() {
        return iznos;
    }

    public void setIznos(VodaIznos iznos) {
        this.iznos = iznos;
    }

    public VodaKonstante getKonstante() {
        return konstante;
    }

    public void setKonstante(VodaKonstante konstante) {
        this.konstante = konstante;
    }
}
