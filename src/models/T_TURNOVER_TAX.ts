import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TURNOVER_TAX', {schema: 'dbo' } )
export class T_TURNOVER_TAX {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'TUR_ACCDATE_DAT',
        })
    public TUR_ACCDATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TUR_SUBDEPARTMENT_N',
        })
    public TUR_SUBDEPARTMENT_N: number;

    @Column('decimal', {
        nullable: false,
        primary: true,
        precision: 4,
        scale: 2,
        name: 'TUR_TAXRATE_N',
        })
    public TUR_TAXRATE_N: number;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUR_TURNOVER_N',
        })
    public TUR_TURNOVER_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'TUR_PRICECURRENCY_C',
        })
    public TUR_PRICECURRENCY_C: string | null;

}
