import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LABEL_RF', {schema: 'dbo' } )
export class T_LABEL_RF {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:9,
        // scale:0,
        name: 'LRF_ID_N',
        })
    public LRF_ID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 15,
        name: 'LRF_TYPE_C',
        })
    public LRF_TYPE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'LRF_IDNUMBER_C',
        })
    public LRF_IDNUMBER_C: string;

    @Column('tinyint', {
        nullable: false,
        name: 'LRF_LABELS_N',
        })
    public LRF_LABELS_N: number;

    @Column('tinyint', {
        nullable: true,
        name: 'LRF_REASON_N',
        })
    public LRF_REASON_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'LRF_PRINT_N',
        })
    public LRF_PRINT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LRF_PRINTER_C',
        })
    public LRF_PRINTER_C: string | null;

    @Column('datetime', {
        nullable: false,
        name: 'LRF_DATE_DAT',
        })
    public LRF_DATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 16,
        name: 'LRF_USERID_C',
        })
    public LRF_USERID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'LRF_PDT_C',
        })
    public LRF_PDT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'LRF_FORMAT_C',
        })
    public LRF_FORMAT_C: string | null;

}
