import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SERVICE_ITEM_LABEL', {schema: 'dbo' } )
export class T_SERVICE_ITEM_LABEL {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'SIL_IDNUMBER_C',
        })
    public SIL_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'SIL_LABELID_C',
        })
    public SIL_LABELID_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'SIL_LASTPRINTDATE_DAT',
        })
    public SIL_LASTPRINTDATE_DAT: Date;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'SIL_SELLINGPRICE_D',
        })
    public SIL_SELLINGPRICE_D: number;

}
