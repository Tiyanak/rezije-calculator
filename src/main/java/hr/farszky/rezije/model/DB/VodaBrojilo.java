package hr.farszky.rezije.model.DB;

import javax.persistence.*;

/**
 * Created by Igor Farszky on 24.9.2017..
 */
@Entity
@Table(name = "voda_brojilo")
public class VodaBrojilo {

    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="voda_brojilo_seq")
    @SequenceGenerator(name="voda_brojilo_seq", sequenceName="voda_brojilo_seq", allocationSize=1)
    private Integer id;

    @Column(name = "ukupno_sad")
    private Double ukupno_sad;

    @Column(name = "ukupno_prije")
    private Double ukupno_prije;

    @Column(name = "kontrolno_sad")
    private Double kontrolno_sad;

    @Column(name = "kontrolno_prije")
    private Double kontrolno_prije;

    public VodaBrojilo() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getUkupno_sad() {
        return ukupno_sad;
    }

    public void setUkupno_sad(Double ukupno_sad) {
        this.ukupno_sad = ukupno_sad;
    }

    public Double getUkupno_prije() {
        return ukupno_prije;
    }

    public void setUkupno_prije(Double ukupno_prije) {
        this.ukupno_prije = ukupno_prije;
    }

    public Double getKontrolno_sad() {
        return kontrolno_sad;
    }

    public void setKontrolno_sad(Double kontrolno_sad) {
        this.kontrolno_sad = kontrolno_sad;
    }

    public Double getKontrolno_prije() {
        return kontrolno_prije;
    }

    public void setKontrolno_prije(Double kontrolno_prije) {
        this.kontrolno_prije = kontrolno_prije;
    }
}
