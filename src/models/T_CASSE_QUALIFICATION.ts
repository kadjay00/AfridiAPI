import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CASSE_QUALIFICATION', {schema: 'dbo' } )
export class T_CASSE_QUALIFICATION {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 1,
        name: 'CAQ_QUALIFICATION_C',
        })
    public CAQ_QUALIFICATION_C: string;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'CAQ_DESCRIPTIONNL_C',
        })
    public CAQ_DESCRIPTIONNL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'CAQ_DESCRIPTIONFR_C',
        })
    public CAQ_DESCRIPTIONFR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'CAQ_DESCRIPTIONRFNL_C',
        })
    public CAQ_DESCRIPTIONRFNL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'CAQ_DESCRIPTIONRFFR_C',
        })
    public CAQ_DESCRIPTIONRFFR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'CAQ_DESCRIPTIONRFSHORTNL_C',
        })
    public CAQ_DESCRIPTIONRFSHORTNL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'CAQ_DESCRIPTIONRFSHORTFR_C',
        })
    public CAQ_DESCRIPTIONRFSHORTFR_C: string | null;

    @Column('tinyint', {
        nullable: true,
        name: 'CAQ_SORTOL_N',
        })
    public CAQ_SORTOL_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'CAQ_SORTRF_N',
        })
    public CAQ_SORTRF_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'CAQ_DONATION_C',
        })
    public CAQ_DONATION_C: string | null;

}
